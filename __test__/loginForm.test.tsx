/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { LoginForm } from '../pages/user/login/loginForm';
import { nanoid } from 'nanoid';

jest.mock("nanoid", () => {
  return { nanoid: () => "1234" };
});

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Required fields", () => {
  const onSubmit = jest.fn();
  act(() => {
    render(<LoginForm/>, container);
  });

  // get a hold of the button element, and trigger some clicks on it
  const buttons = document.querySelectorAll("button");
  // const error_messages = document.querySelectorAll("form div div:nth-child(2)");
  // const error_messages = document.querySelectorAll("form div div:nth-child(1)");
  // act(() => {
  //   buttons[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
  // });
  expect(buttons[1].innerHTML).toBe('Login')
  // expect(document.querySelector("form div div:nth-child(2)").innerHTML).toBe('Required');  
});