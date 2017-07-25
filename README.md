# react-native-timeago

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A component to display time formatted in "calendar time," or "time ago." For instance, given a time 10 minutes previous to now, the component will render "10 minutes ago." Additionally, the component updates this calendar time with an interval.

The component works seamlessly with both react-native and the web (via [react-native-web][react-native-web])

## Install

```bash
yarn add @dschau/react-native-timeago
```

## Usage

```javascript
import React from 'react-native';
import {
  View
} from 'react-native';

import TimeAgo from '@dschau/react-native-timeago';

export default function TimeAgoContainer() {
  return (
    <View>
      <TimeAgo time={new Date('01/01/1970')} />
    </View>
  );
}
```

### Props

#### **`time`**

Use to set the "start" date for comparison to now. Accepts `number`, `string`, or `Date`.

#### `prefix`

Sets the prefix to display _before_ to the calendar time. For instance, `prefix="as of"` will render `as of X ago`.

Default is `false`.

#### `suffix`

Sets the suffix to display _after_ the calendar time. For instance, `suffix="some time ago"` will render `10 minutes some time ago`.

Default is `ago`, set to `false` to disable.

#### `interval`

Set the interval to customize when `now` is re-set.

Default is `60000` (1 minute in MS)

#### `className`

Set to add a `className` to the internal `Text` element

Default is `''`

#### `style`

Customize the internal style of the internal `Text` element

[build-badge]: https://img.shields.io/travis/dschau/react-native-timeago/master.svg?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/@dschau/react-native-timeago.svg?style=flat-square
[npm]: https://www.npmjs.org/package/@dschau/react-native-timeago

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/dschau/react-native-timeago

[react-native-web]: https://github.com/necolas/react-native-web
