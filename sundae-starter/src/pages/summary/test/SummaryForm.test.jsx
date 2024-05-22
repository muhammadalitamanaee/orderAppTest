import SummaryForm from "../SummaryForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("the test for the summary form", () => {
  test("the initail state of a btn and checkbox", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /Terms and Conditions/i,
    });
    const submitButton = screen.getByRole("button", {
      name: /Confirm order/i,
    });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    expect(submitButton).toBeDisabled();
  }),
    test("check box checked and bt is enabled", async () => {
      render(<SummaryForm />);
      const checkbox = screen.getByRole("checkbox", {
        name: /Terms and Conditions/i,
      });
      const submitButton = screen.getByRole("button", {
        name: /Confirm order/i,
      });
      const user = userEvent.setup();
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).not.toBeChecked();
      expect(submitButton).toBeDisabled();
      await user.click(checkbox);
      expect(checkbox).toBeChecked();
      expect(submitButton).toBeEnabled();
      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
      expect(submitButton).toBeDisabled();
    });
  test("popover response to hover", async () => {
    render(<SummaryForm />);
    const { hover, unhover } = userEvent.setup();
    //popover starts hidden
    const nullPopOver = screen.queryByText(
      /No ice cream will actually be delivered/i
    );
    expect(nullPopOver).not.toBeInTheDocument();
    //popover appear on screen
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await hover(termsAndConditions);
    const popover = screen.getByText(
      /No ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    //popover goes away again
    await unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
  });
});
