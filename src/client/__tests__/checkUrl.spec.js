import { checkUrl } from "../js/nameChecker";

describe("testing checkUrl function",()=>{

   test("testing checkUrl(url) function ",()=>{

    expect(checkUrl("https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined")).toBeTruthy();
    expect(checkUrl("lolboy")).toBeFalsy();
    expect(checkUrl(5)).toBeFalsy();


   }) 
  

})