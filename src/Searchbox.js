import React from 'react';

const Searchbox = ({searchField , searchChange}) =>{
    return (
        <div className = "tc bg-light-green  dib br5 pad3 ma2  shadow-2 bw2">      
              <input 
              className = 'ba b--green bg-light-green '
              type = 'search' 
              placeholder = 'search'
              onChange = {searchChange} />
        </div>

    )
}
export default Searchbox;