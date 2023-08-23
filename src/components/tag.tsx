import clsx from "clsx";
import { Apple, Beef, Carrot, Milk, Sandwich } from "lucide-react";

export type TagTypes = 'bakery' | 'meat' | 'drink' | 'vegetable' | 'fruit';

interface TagProps {
  type: TagTypes;
  isChecked: boolean;
}

export function Tag(props: TagProps) {

  let tag;
  switch(props.type) {
    case 'bakery':
      tag = { icon: <Sandwich size={16} />, name: 'Padaria' };
      break;
    case 'fruit':
      tag = { icon: <Apple size={16} />, name: 'Fruta' };
      break;
    case 'drink':
      tag = { icon: <Milk size={16} />, name: 'Bebida' };
      break;
    case 'vegetable':
      tag = { icon: <Carrot size={16} />, name: 'Legume' };
      break;

    default:
      tag = { icon: <Beef size={16} />, name: 'Carne' }
  }

  return (
    <div className={clsx('inline-flex items-center gap-1 px-2 py-2 sm:px-4 sm:py-2 rounded-full', {
      'bg-support-yellow-dark text-support-yellow-light': props.type === 'bakery',
      'bg-support-green-dark text-support-green-light': props.type === 'vegetable',
      'bg-support-orange-dark text-support-orange-light': props.type === 'fruit',
      'bg-support-blue-dark text-support-blue-light': props.type === 'drink',
      'bg-support-pink-dark text-support-pink-light': props.type === 'meat',
      'opacity-50': props.isChecked
    })}>
      {tag.icon}
      <span className="lowercase text-xs font-bold leading-[130%] hidden sm:block">{tag.name}</span>
    </div>
  );
}
