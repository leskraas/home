import * as React from 'react';
import { ElementType } from 'react';

interface SerializersType {
    [key: string]: React.ReactNode;
}

export interface Serializers {
    types: SerializersType;
    marks?: Record<string, string | ElementType>;
    list?: (props: any) => React.ReactNode;
    listItem?: (props: any) => React.ReactNode;
    hardBreak?: boolean;
    block?: () => void;
    span?: () => void;
}

interface BlockType {
    _type: string;
}

export interface Props {
    blocks: BlockType | BlockType[];
    className?: string;
    renderContainerOnSingleChild?: boolean;
    serializers?: Serializers;
    projectId?: string;
    dataset?: string;
    imageOptions?: Record<string, string | ElementType>;
}

declare const BlockContent: React.FC<Props>;
BlockContent.defaultProps = {
    renderContainerOnSingleChild: false,
    serializers: {},
    imageOptions: {},
};

export default BlockContent;
