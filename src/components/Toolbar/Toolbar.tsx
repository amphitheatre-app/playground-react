import React, { useEffect } from 'react';
import './toobar.less';

interface ToolbarProps {
}

const useLanguages = ()=>{
  useEffect(() => {
    
    // const languages = monaco.languages.getLanguages();
    // console.log('Supported languages:', languages);
  }, []);
  return 
}

/**
 * Primary UI component for user interaction
 */
export const Toolbar = ({
}: ToolbarProps) => {
  useLanguages();
  return (
    <div>

    </div>
  );
};
