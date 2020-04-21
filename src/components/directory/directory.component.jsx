import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuStyles } from './directory.styles';

const Directory = ({ sections }) => (
    <DirectoryMenuStyles>
        {sections.map(({ id, ...sectionProps }) => (
            <MenuItem key={id} {...sectionProps} />
        ))}
    </DirectoryMenuStyles>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
