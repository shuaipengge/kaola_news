import { fromJS } from "immutable";
// immutable库
// import * as constants from "./constants";

const defaultState = fromJS({
  title: "考拉非常可爱1",
  content:
    '<img src="https://koala.net/images/learn/xexchange_students.jpg.pagespeed.ic.h8gl-632qj.webp" alt="img" /><p><b>树袋熊，又称考拉，是澳大利亚的国宝</b>，也是澳大利亚奇特的珍贵原始树栖动物。英文名Koalabear来源于古代土著文字，意思是“nodrink”。因为树袋熊从他们取食的桉树叶中获得所需的90%的水分，只在生病和干旱的时候喝水，当地人称它“克瓦勒”，意思也是“不喝水”。</p><p>树袋熊并不是熊科动物，而且它们相差甚远。熊科属于食肉目，而树袋熊却属于有袋目。它每天18个小时处于睡眠状态，性情温顺，体态憨厚。</p><p>树袋熊，又称考拉，是澳大利亚的国宝，也是澳大利亚奇特的珍贵原始树栖动物。英文名Koalabear来源于古代土著文字，意思是“nodrink”。因为树袋熊从他们取食的桉树叶中获得所需的90%的水分，只在生病和干旱的时候喝水，当地人称它“克瓦勒”，意思也是“不喝水”。</p><p>树袋熊并不是熊科动物，而且它们相差甚远。熊科属于食肉目，而树袋熊却属于有袋目。它每天18个小时处于睡眠状态，性情温顺，体态憨厚。</p><p>树袋熊，又称考拉，是澳大利亚的国宝，也是澳大利亚奇特的珍贵原始树栖动物。英文名Koalabear来源于古代土著文字，意思是“nodrink”。因为树袋熊从他们取食的桉树叶中获得所需的90%的水分，只在生病和干旱的时候喝水，当地人称它“克瓦勒”，意思也是“不喝水”。</p><p>树袋熊并不是熊科动物，而且它们相差甚远。熊科属于食肉目，而树袋熊却属于有袋目。它每天18个小时处于睡眠状态，性情温顺，体态憨厚。</p>'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
