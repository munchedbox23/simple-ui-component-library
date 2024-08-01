## Table of Contents

- [Welcome](#welcome)
- [Features](#features)
- [Usage](#installation)
- [Contributing](#contributing)

<p align="center">
  <a href="https://www.npmjs.com/package/munchedbox-ui"><img src="https://flat.badgen.net/npm/dt/munchedbox-ui" alt="NPM" /></a>
  <a href="https://www.npmjs.com/package/munchedbox-ui"><img src="https://flat.badgen.net/npm/v/munchedbox-ui"/></a>
  <a href="https://t.me/munchedbox"><img width="22" height="22" src="https://github.com/badges/shields/assets/10694593/c5c5acc3-f434-4a8d-a834-6d94a7ffb45a" alt="" /></a>
</p>

# 👋 Welcome

Welcome to Munchedbox component library, a collection of reusable UI components built with design code principles. Our library aims to provide developers with a set of consistent, customizable, and easy-to-use components to streamline the development process and ensure a cohesive user experience across applications.

## ✨ Features

- **Reusable Components**: Our library includes a variety of reusable components such as buttons, inputs, cards, and more, allowing you to quickly build interfaces without reinventing the wheel.
- **Customizable Styles**: Components are highly customizable, with support for theming, custom styles, and props to adapt to your project's specific needs.
- **Documentation and Examples**: Comprehensive documentation and live examples are provided for each component, making it easy to understand how to use and customize them in your projects.

# Installation

MunchedboxUI is available as an [npm package](https://www.npmjs.com/package/munchedbox-ui).

## npm

To get started with our component library, simply install it via npm or yarn:

```bash
npm i munchedbox-ui
```

In order to have `munchedbox-ui` working properly, you'll also need
[styled-components 💅](https://github.com/styled-components/styled-components),
this way you can use custom themes and get the best of the library.

## Usage

Import the component and start using the library

```bash

import { Button, Input } from "munchedbox-ui";

const ExampleComponent = () => {
  return (
    <div>
      <Button variant="primary" size="md" type="button">Click me</Button>
      <Input
        autoComplete="current-password"
        type="password"
        name="password"
        placeholder="Enter your password"
        value={value}
        onChange={onChange}
        variant="rounded"
      />
    </div>
  );
};
```

## Support

If you like this project, please consider giving it a ⭐️ on [GitHub](https://github.com/munchedbox23/simple-ui-component-library). It helps us know that you appreciate our work and motivates us to continue improving the library.

## 🤝 Contribution

Thank you for considering contributing to our project! To maintain a collaborative and productive environment, please adhere to the following guidelines when contributing:

1. Reporting Issues: If you encounter any bugs, inconsistencies, or have suggestions for improvements, please create an issue on GitHub. Clearly describe the problem or suggestion, along with steps to reproduce if applicable.

2. Submitting Pull Requests: Before starting work on a new feature or fix, please open an issue to discuss the proposed changes. This helps ensure that your contribution aligns with the project goals and prevents duplicate efforts.

3. Testing: Write tests for any new features or fixes you contribute. Ensure existing tests pass and write additional tests as necessary to cover edge cases.

4. Commit Messages: Write clear and descriptive commit messages that explain the purpose of each change. Use present-tense verbs and be concise but informative. Before commiting husky will automatically format, lint and test the code, please respect those pre-commit guidelines and make sure it passes.

If you want to help with the project, feel free to [open pull requests][1],
[submit issues or component proposals][2].
Let's bring this UI back to life ♥️

[1]: https://github.com/munchedbox23/simple-ui-component-library/pulls
[2]: https://github.com/munchedbox23/simple-ui-component-library/issues
