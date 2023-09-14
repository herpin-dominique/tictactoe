import { render, fireEvent, screen } from "@testing-library/svelte";

import Comp from "$lib/Case.svelte";

describe("Case component", () => {
  it("shows proper heading when rendered", () => {
    render(Comp, { name: "Toto" });
    const heading = screen.getByText("Hello World!");
    expect(heading).toBeInTheDocument();
  });

  it("changes button text on click", async () => {
    render(Comp, { name: "Toto" });
    const button = screen.getByRole("button");

    expect(button.innerHTML).toBe("Hello");

    await fireEvent.click(button);
    expect(button.innerHTML).toBe("Hello Toto");
  });
});
