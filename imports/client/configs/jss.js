import jss from 'jss';
import vendorPrefixer from 'jss-vendor-prefixer';
import camelCase from 'jss-camel-case';
import defaultUnit from 'jss-default-unit';
import extend from 'jss-extend';
import propsSort from 'jss-props-sort';
import nested from 'jss-nested';

jss.use(extend());
jss.use(nested());
jss.use(camelCase());
jss.use(defaultUnit({ unit: 'rem' }));
jss.use(vendorPrefixer());
jss.use(propsSort());
