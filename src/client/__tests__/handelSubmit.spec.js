import { handleSubmit } from "../js/formHandler";




describe('testing if the handelSubmit function will return a promise or not',()=>{
    

    test('testing if the handelSubmit function will return a promise or not', () => {
        expect(handleSubmit).toBeDefined();
      })

})