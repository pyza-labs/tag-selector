import React, { useState } from "react";
import tagCSS from "./tagSelect.module.css";
import { addIcon, addCheck } from "../../assets/index";

const Tag = props => {
  const [tagArray = [], setTagArray] = useState();

  const clickHandler = element => {
    let tagArrayNeo = Array.from(tagArray);
    let index;
    // if (tagArrayNeo === null) {
    //   tagArrayNeo.push(element);
    //   return;
    // }
    // tagArrayNeo.forEach(tag => {
    //   if (tag !== element) {
    //     tag.push(element);
    //   } else {
    //     tag.splice(index, 1);
    //   }
    // });
    if (!tagArrayNeo.includes(element)) {
      tagArrayNeo.push(element);
    } else {
      index = tagArrayNeo.indexOf(element);
      tagArrayNeo.splice(index, 1);
    }
    setTagArray(tagArrayNeo);
    console.log(tagArrayNeo);
    // return props.select(index);
  };

  let selectCss = [tagCSS.atext, tagCSS.select];
  let deselectCss = [tagCSS.atext, tagCSS.deselect];

  return (
    <div className={tagCSS.tag}>
      {props.items.map((element, index) => {
        if (props.renderItem) {
          const render = props.renderItem(
            element,
            index,
            tagArray.includes(element),
            () => clickHandler(element)
          );
          return render;
        }
        return (
          <div
            href="#0"
            className={
              tagArray.includes(element)
                ? selectCss.join(" ")
                : deselectCss.join(" ")
            }
            key={index * 3}
            onClick={() => clickHandler(element)}
          >
            {tagArray.includes(element) ? (
              <svg
                className={tagCSS.check}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z" />
              </svg>
            ) : (
              <svg
                className={tagCSS.add}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z" />
              </svg>
            )}
            {element}
          </div>
        );
      })}
    </div>
  );
};

export default Tag;
