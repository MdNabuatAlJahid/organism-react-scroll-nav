'use strict';

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import dispatcher, {dispatch} from '../actions/dispatcher';
import getScrollInfo from 'get-scroll-info';
import { assign } from 'react-atomic-molecule';
let incNum = 0;

class ScrollStore extends ReduceStore
{
  getInitialState()
  {
      this.spys = Immutable.Set();
      this.margins = Immutable.Set();
      if (window) {
          if (window.addEventListener) {
            window.addEventListener('scroll', this.scrollMonitor.bind(this));
          } else {
            window.attachEvent('onscroll', this.scrollMonitor.bind(this));
          }
          const self = this;
          setTimeout(()=>{
                self._triggerScroll.call(self);
          },100);
      }
      return Immutable.Map({
        scrollDelay: 50,
        scrollMargin: 50
      });
  }

  scrollMonitor(e)
  {
    clearTimeout(this._scrollTimeout);
    const self = this;
    const delay = self.getState().get('scrollDelay');
    self._scrollTimeout = setTimeout(()=>{
        self._triggerScroll.call(self,e);
    }, delay);
  }

  _triggerScroll()
  {
    let scroll = getScrollInfo(null, 0);
    let actives = {};
    let offsetCache = {};
    let margin = this.getState().get('scrollMargin');
    let scrollTop = scroll.top + margin;
    let arrTestScrollTo = [];
    this.spys.forEach((node)=>{
        let pos = node.getOffset();
        if (node.testScrollTo) {
            if (scrollTop>=pos.top && scrollTop<pos.bottom) {
                actives['default'] = node.id;
            }
            arrTestScrollTo.push(node);    
        }
        pos.isElementOnScreen = !(
            pos.top > scroll.bottom - margin
            || pos.bottom < scroll.top + margin
            || pos.right < scroll.left + margin
            || pos.left > scroll.right - margin
        );
        offsetCache[node.id] = pos;
    });
    this.margins.forEach((margin)=>{
        scrollTop = scroll.top + margin;
        arrTestScrollTo.every((node)=>{
            let pos = offsetCache[node.id];
            if (scrollTop>=pos.top && scrollTop<pos.bottom) {
                actives['m'+margin] = node.id;
                return false;
            }
            return true;
        });
    });
    this.margins = this.margins.clear();
    dispatch(assign(
        actives,
        {
           nodes  : offsetCache,
           scroll : scroll
        }
    ));
  }

  getOffset(id)
  {
      let offset = false;
      this.spys.some((node)=>{
          if (id===node.id) {
             offset = node.getOffset();
          }
          return offset;
      });
      return offset;
  }
  
  attach(node)
  {
      if (!node.id) {
          if (node.props.id) {
              node.id = node.props.id;
          } else {
              node.id = 'spy-'+incNum;
              incNum++;
          }
      }
      this.spys = this.spys.add(node);
  }

  detach(node)
  {
      this.spys = this.spys.remove(node);
  }

  addMargin(num)
  {
      this.margins = this.margins.add(num);
  }

  deleteMargin(num)
  {
      this.margins = this.margins.remove(num);
  }

  reduce (state, action)
  {
    return state.merge( action );
  }

}

// Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.
const instance = new ScrollStore(dispatcher);
export default instance;
