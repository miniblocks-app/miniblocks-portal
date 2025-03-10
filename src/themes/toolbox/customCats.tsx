import * as Blockly from "blockly/core";
import book from '../../assets/statusImages/book.gif'

class CustomCategory extends Blockly.ToolboxCategory {
  constructor(categoryDef: any, toolbox: any, opt_parent: any) {
    super(categoryDef, toolbox, opt_parent);
  }

//   addColourBorder_(colour: any) {
//     this.rowDiv_.style.backgroundColor = colour;
//   }

//   setSelected(isSelected: any) {
//     // We do not store the label span on the category, so use getElementsByClassName.
//     var labelDom = this.rowDiv_.getElementsByClassName("blocklyTreeLabel")[0];
//     if (isSelected) {
//       // Change the background color of the div to white.
//       this.rowDiv_.style.backgroundColor = "white";
//       // Set the colour of the text to the colour of the category.
//       labelDom.style.color = this.colour_;
//     } else {
//       // Set the background back to the original colour.
//       this.rowDiv_.style.backgroundColor = this.colour_;
//       // Set the text back to white.
//       labelDom.style.color = "white";
//     }
//     // This is used for accessibility purposes.
//     Blockly.utils.aria.setState(
//       /** @type {!Element} */ this.htmlDiv_,
//       Blockly.utils.aria.State.SELECTED,
//       isSelected
//     );
//   }
}

Blockly.registry.register(
  Blockly.registry.Type.TOOLBOX_ITEM,
  Blockly.ToolboxCategory.registrationName,
  CustomCategory,
  true
);

export default CustomCategory;
