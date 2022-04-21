import { SelectableCard } from "./components";
import "./styles.css";

/**
 *  SELECTABLE LIST - PRODUCT REQUIREMENTS:
 *
 *  This application it's a list of employees
 *  rendered on cards, every card needs to have
 *  the employee name as the title, and the employee
 *  email as the description.
 *
 *  When you have the date in the cards, you need to
 *  fix the select card behavior, currently all the
 *  cards are selected, which is not ideal, we just
 *  need to have one card selected, since just one
 *  employee will join the project.
 *
 *  Once you fix the select card bevahior, you will
 *  need to render the employee name selected in the
 *  span tag below.
 *
 *  Follow these steps to complete your challenge:
 *
 *  1. Do a get request to: https://jsonplaceholder.typicode.com/users
 *  you will need to render just 4 users with their names and emails,
 *  in the cards.
 *
 *  2. Fix the selectable card behavior, pay atention to the props,
 *  the importan props are called:
 *
 *  - selected: string
 *  - value: string
 *
 *  3. When just one card is selected, make sure to render the name
 *  of the user that is being selected on the card, in the span tag
 *  below.
 *
 *  4. That's it ;) good luck
 *
 */

export default function App() {
  return (
    <>
      <h2>Welcome Project Manager</h2>
      <span>Choose an employee for the project</span>
      <div className="container">
        <SelectableCard
          title="This is first"
          description="You can select just one option from this list"
        />
        <SelectableCard
          title="This is second"
          description="You can select just one option from this list"
        />

        <SelectableCard
          title="This is first"
          description="You can select just one option from this list"
        />
        <SelectableCard
          title="This is first"
          description="You can select just one option from this list"
        />
      </div>
      <div className="selected-employee-container">
        <span>
          Selected employee: <b>render selected employee name here</b>
        </span>
      </div>
    </>
  );
}
