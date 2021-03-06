import React, {PureComponent} from 'react';
import get from 'get-object-value';
import { mixClass, SemanticUI } from 'react-atomic-molecule';

import scrollStore from '../../src/stores/scrollStore';
import fastScrollStore from '../../src/stores/fastScrollStore';

class ScrollSpy extends PureComponent
{
    state = {}

    static defaultProps = {
        monitorScroll: true,
        noDelay: false,
    }

    getOffsetEl()
    {
        if (this.el) {
            return this.el;
        } else {
            console.warn('Please use SemanticUI. props.container -> import {SemanticUI} from "react-atomic-molecule"');
        }
    }

    useStore()
    {
        const {noDelay} = this.props;
        return (noDelay) ? fastScrollStore : scrollStore;
    }

    attach()
    {
        if (this.useStore().hasAttach(this)) {
            return this.state.id
        }
        const id =  this.useStore().attach(this)
        this.setState({ id })
        return id
    }

    detach()
    {
        return this.useStore().detach(this)
    }

    isScrollReceiver(el)
    {
        if (get(el,['props','isScrollReceiver'])) {
            return true;
        }
        return false;
    }

    componentDidMount()
    {
        this.attach()
    }

    componentWillUnmount()
    {
        this.detach();
    }

    render()
    {
        /**
         * monitorScroll use in store, in component just for reset props.
         */ 
        const {className, monitorScroll, children, container, noDelay, ...others} = this.props;
        const isScrollReceiver = this.isScrollReceiver(children);
        const targetId = this.state.id;
        const classes = mixClass(className, 'spy-tar-'+targetId);
        let cookChildren;
        let thisContainer;
        let thisProps;
        if (isScrollReceiver) {
            thisContainer = children
            thisProps = {
                ...others,
                ...children.props,
                className: classes,
                targetId,
                container,
                noDelay,
            };
        } else {
            thisProps = {
                children,
                className: classes,
                ...others
            };
            if (container) {
                thisContainer = container;
            } else {
                thisContainer = <SemanticUI />;
            }
        }
        thisProps = {
            ...thisProps,
            refCb: (el)=>this.el=el
        };
        return React.cloneElement(
             thisContainer,
             thisProps
        );
    }
}

export default ScrollSpy;
