import React from "react";
import cls from "classnames";
import styles from "./selectable-card.module.css";
import { CheckIcon } from "../icons/check-icon";

export interface ISelectableCardProps {
  title: string;
  value?: string;
  description: string;
  selected: string;
  onClick?(): void;
}

export const SelectableCard = (props: ISelectableCardProps) => {
  const { title, description, selected, onClick, value } = props;

  return (
    <div
      className={cls(styles.selectable_card__wrapper, {
        [styles.selectable_card__selected]: selected === value
      })}
      onClick={onClick}
    >
      <div className={styles.selectable_card__title_wrapper}>
        <div className={styles.selectable_card__title}>{title}</div>
        {selected === value && (
          <div className={styles.selectable_card__checked}>
            <CheckIcon />
          </div>
        )}
      </div>

      <div className={styles.selectable_card__description}>{description}</div>
    </div>
  );
};
