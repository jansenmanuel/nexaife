import _ from 'lodash';

import { lastIndex } from '../Math/LastIndex';

export const pageSlice=(pageNumber) => _.slice(pageNumber, [1], [lastIndex(pageNumber) - 1]);
