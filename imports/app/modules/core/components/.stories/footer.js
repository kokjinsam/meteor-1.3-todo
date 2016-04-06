import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TrioLayout from '../layout.trio';
import Footer from '../footer';

storiesOf('core.TrioLayout', module)
  .add('default view', () => {
    const topNavigation = () => (<p>top navigation</p>);
    const content = () => (<p>Content</p>);
    const footer = () => (<p>footer</p>);
    return (
      <TrioLayout
        topNavigation={topNavigation}
        content={content}
        footer={footer}
      />
    );
  });

storiesOf('core.Footer', module)
  .add('default view', () => (
    <Footer />
  ));
