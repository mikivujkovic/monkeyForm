import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByPlaceholderText,
  getByRole,
} from "@testing-library/react";

import App from "./App";

// tests if first step renders all elements
test("renders first step inputs and button", () => {
  render(<App />);

  // assert that elements are renderd
  const firstnameInput = screen.getByPlaceholderText("firstname");
  const lastnameInput = screen.getByPlaceholderText("lastname");
  const nextButton = screen.getByText("next");
});

// tests if we can move to the next step and render all second step elements
test("renders second step inputs and buttons", async () => {
  render(<App />);

  // input valid firstname value
  fireEvent.change(screen.getByPlaceholderText("firstname"), {
    target: { value: "Miodrag" },
  });

  // input valid lastname value
  fireEvent.change(screen.getByPlaceholderText("lastname"), {
    target: { value: "Vujkovic" },
  });

  // click on the next button to move to the next step
  fireEvent.click(screen.getByText("next"));

  // check if second screen is rendered
  await waitFor(() => screen.getByPlaceholderText("username"));

  // assert that all elements of the second screen are rendered
  const usernameInput = screen.getByPlaceholderText("username");
  const emailInput = screen.getByPlaceholderText("email");
  const passwordInput = screen.getByPlaceholderText("password");
  const confirmPasswordInput = screen.getByPlaceholderText("confirm password");
  const termsCheckbox = screen.getByRole("checkbox");
  const nextButton = screen.getByText("next");
  const backButton = screen.getByText("back");
});

// tests if we can move to the final step and if it is rendered
test("renders final step", async () => {
  render(<App />);

  // enter valid firstaname value
  fireEvent.change(screen.getByPlaceholderText("firstname"), {
    target: { value: "Miodrag" },
  });

  // enter valid lastname value
  fireEvent.change(screen.getByPlaceholderText("lastname"), {
    target: { value: "Vujkovic" },
  });

  // click on the next button to move to the second step
  fireEvent.click(screen.getByText("next"));

  // wait for second screen to be rendered
  await waitFor(() => screen.getByPlaceholderText("username"));

  // enter valid username value
  fireEvent.change(screen.getByPlaceholderText("username"), {
    target: { value: "Miki" },
  });

  // eneter valid emai value
  fireEvent.change(screen.getByPlaceholderText("email"), {
    target: { value: "email@example.com" },
  });

  // enter valid password value
  fireEvent.change(screen.getByPlaceholderText("password"), {
    target: { value: "mikiMiki0*" },
  });

  // enter valid confirm password value
  fireEvent.change(screen.getByPlaceholderText("confirm password"), {
    target: { value: "mikiMiki0*" },
  });

  // check terms and condition checkbox
  fireEvent.click(screen.getByRole("checkbox"));

  // click the button to move to the final step
  fireEvent.click(screen.getByText("next"));

  // wait for final step to be rendered
  await waitFor(() => screen.getByText("Logout"));

  // assert that text is rendered on the final step
  const successText = screen.getByText(
    "You have successfuly logged in with following data:"
  );
});

// test if error messages are shown for invalid field values
test("shows error messages on first step", () => {
  render(<App />);

  // assert that input fields are rendered
  const firstnameInput = screen.getByPlaceholderText("firstname");
  const lastnameInput = screen.getByPlaceholderText("lastname");

  // input invalid firstname value
  fireEvent.change(firstnameInput, {
    target: { value: "Ja" },
  });

  // assert that firstname error message is shown
  const firstnameError = screen.findByText(
    "First name should be between 2 and 25 characters long"
  );

  // input invalid lastname value
  fireEvent.change(lastnameInput, {
    target: { value: "Ja" },
  });

  // assert that lastname error mesage is shown
  const lastnameError = screen.findByText(
    "Last name should be between 2 and 25 characters long"
  );
});
