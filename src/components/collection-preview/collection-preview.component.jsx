import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import {
    CollectionPreviewContainer,
    PreviewStyles,
    TitleStyles,
} from './collection.styles';

const CollectionPreview = ({ title, items }) => {
    return (
        <CollectionPreviewContainer>
            <TitleStyles>{title.toUpperCase()}</TitleStyles>
            <PreviewStyles>
                {items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </PreviewStyles>
        </CollectionPreviewContainer>
    );
};

export default CollectionPreview;
