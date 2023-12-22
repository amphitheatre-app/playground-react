# Amphitheatre Playground component for React

An advanced React component that seamlessly combines an elegant code editor with sophisticated features, creating an indispensable tool for developers.

Key Features:

- **Sleek Code Editor**: Enjoy a delightful coding experience with a clean and
  intuitive interface.
- **Syntax Highlighting**: Enhance code understanding with intelligent syntax
  highlighting that improves readability.
- **Multi-Language Support**: Seamlessly switch between programming languages,
  supporting a diverse development environment.
- **Built-in Build Tools**: Simplify your workflow with integrated build tools,
  supporting code compilation and execution.
- **GitHub Integration**: Accelerate coding with seamless connections to GitHub,
  enabling quick loading of predefined code snippets.
- **Instant Code Preview**: Quickly load previews for predefined code snippets,
  providing immediate insights into your code.
- **Console Output within the Component**: Streamline debugging by viewing
  console outputs directly within the component, simplifying error
  identification.

## Installation

```bash
npm install --save @amphitheatre/playground-react
```

```bash
yarn add @amphitheatre/playground-react
```

## How to use

```typescript
import Playground from '@amphitheatre/playground-react'

export default function App() {
  return <Playground style={{ width: 800, height: 500 }} />
}
```

#### Props

The Playground accepts the following props/parameters.

| Title            | Description                                                  | Default                |
| ---------------- | ------------------------------------------------------------ | ---------------------- |
| **`title`**      | An optional title for the editor pane.                       | `''`                   |
| **`files`**      | A map of `{ [filename]: code }`. This will take precedence over `code` if given. | `undefined`            |
| **`entry`**      | The filename of the file that runs first. This is only relevant when showing multiple files with the `files` parameter. | `''`                   |
| **`initialTab`** | The filename of the tab to show by default. This is only relevant when showing multiple files with the `files` parameter. Defaults to the value of `entry`. | `entry`                |
| **`styles`**     | An map of inline style objects, applied to various elements to customize the style of the UI. Example: `{ header: { backgroundColor: 'red' } }` | `{}`                   |
| **`fullscreen`** | Show a button to enable fullscreen editing (in most configurations of panes). Note that the iframe must have the `allowfullscreen` attribute for this to work. | `false`                |
| **`panes`**      | An array of UI panes to display. To display a pane without options, use a string. Otherwise, use an object with a `type` property. The available panes are: `'stack'`, `'editor'`, `'player'`, `'console'`. Note that there *must be* a `player` pane for any code to run. For pane options, see below. | `['editor', 'player']` |

## Contributing

If anything feels off, or if you feel that some functionality is missing, please
check out the [contributing page](https://docs.amphitheatre.app/contributing/).
There you will find instructions for sharing your feedback, building the tool
locally, and submitting pull requests to the project.


**This project is based on the Web3 Open Source General Playground product
developed by Amphitheatre, which aims to help developers learn Web3 development
better, and is co-sponsored by [Amphitheatre](https://amphitheatre.app/) and
[OpenBuild](https://openbuild.xyz).**

**We will post some development tasks as task topics and label them as "Tasks",
interested partners can evaluate the development time in the corresponding
topics, we will pick the most suitable developer from them and assign the task
to him, and we will give rewards after the task is completed and passes the PR.**

For more information, please refer to [How to
Contribute](https://github.com/amphitheatre-app/playground/blob/master/docs/how_to_contribute.md)
and the [Contribution Reward
Announcement](https://github.com/amphitheatre-app/playground/issues/4).

## License

Copyright 2023 The Amphitheatre Authors. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at

      https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
