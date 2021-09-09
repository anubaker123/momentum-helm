export default class PersonProfile {
  constructor(
    public id: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public title: string,
    public experience: string[],
    public connectedProfiles: string[],
    public isLoggedIn: boolean
  ) {}
}

export const personProfiles = [
  new PersonProfile(
    '1',
    'john@yahoo.com',
    'John',
    'Rasch',
    'Mr.',
    ['Developer 2021', 'Angular Instructor 2021'],
    ['2', '3'],
    true
  ),
  new PersonProfile(
    '2',
    'alan@yahoo.com',
    'Alan',
    'Cox',
    'Mr.',
    ['CTO 2020-2021'],
    ['1', '5'],
    false
  ),
  new PersonProfile(
    '3',
    'dee@yahoo.com',
    'Dee',
    'Meyers',
    'Ms.',
    ['Student 2020', 'Developer 2021'],
    ['2'],
    false
  ),
  new PersonProfile(
    '4',
    'mark@yahoo.com',
    'Mark',
    'Meyers',
    'Ms.',
    ['Student 2020', 'Developer 2021'],
    ['2'],
    false
  ),
  new PersonProfile(
    '5',
    'scott@yahoo.com',
    'Scott',
    'Meyers',
    'Ms.',
    ['Student 2020', 'Developer 2021'],
    ['2','4'],
    false
  ),
  new PersonProfile(
    '6',
    'mary@yahoo.com',
    'Mary',
    'Meyers',
    'Ms.',
    ['Student 2020', 'Developer 2021'],
    ['2', '1'],
    false
  ),
  new PersonProfile(
    '7',
    'leo@yahoo.com',
    'Leo',
    'Meyers',
    'Ms.',
    ['Student 2020', 'Developer 2021'],
    ['4', '5'],
    false
  ),
  new PersonProfile(
    '8',
    'zara@yahoo.com',
    'Zara',
    'Meyers',
    'Ms.',
    ['Student 2020', 'Developer 2021'],
    ['2', '3'],
    false
  ),
  new PersonProfile(
    '9',
    'anna@yahoo.com',
    'Anna',
    'Meyers',
    'Ms.',
    ['Student 2020', 'Developer 2021'],
    ['3', '1'],
    false
  ),
];
