import { pageObject } from "./2.7PageObject";
const page = new pageObject(); 

class Intern {
   name: string;
   phone: number;
   title: string;

   constructor(name: string, phone: number, title: string){
      this.name = name;
      this.phone = phone;
      this.title = title;
   };
}; 

let newInterns: Array<Intern> = [
   new Intern('Darth Revan', 7206877465, 'Greatest Ever'),
   new Intern('Anakin Skywalker', 1234567809, 'Padawan Slayer'),
   new Intern('Darth Vader', 7894561023, 'Best Boss'),
   new Intern('Darth Maul', 4561237809, 'Swaggiest') 
];

let addInterns = async (newInterns) => {
   await page.click(page.addEm);
   await page.click(page.newEm);
   await page.setInput(page.namInp, newInterns.name);
   await page.setInput(page.phoInp, newInterns.phone);
   await page.setInput(page.titleInp, newInterns.title);
   await page.click(page.saveBtn);
   await page.driver.sleep(4000);
};

test('can add the bake off crew', async () => {
    await page.navigate(); 
    await page.getElement(page.addEm); 
    for(let i= 0; i < newInterns.length; i ++){
        await addInterns(newInterns[i]); 
    }; 
    await page.driver.quit(); 
})