// import './button.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const createButton = ({
  
  size = 'fwf-btn-md',
  type = 'fwf-btn-primary',
  backgroundColor,
  label,
  onClick,
}: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

   
  btn.className = ['fwf-btn',size, type].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
