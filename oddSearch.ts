import Ask from "https://deno.land/x/ask@1.0.6/mod.ts";
import * as Colors from "https://deno.land/std/fmt/colors.ts";

const ask = new Ask();

async function Main () {
    console.log(Colors.red(`
            #########################################
            ##        FIND A ODD NUMBERS           ##
            #########################################
            `))
    

    let numbersRange = await ask.prompt([
        {
            name:"x",
            type:"input",
            message:"First Number:"
        },
        {
            name:"y",
            type:"input",
            message:"Second Number"
        }
    ])

     async function oddSearch(x:number,y:number){
        let oddNumbers :any = []
        for(let i = x; i <= y; i++){
            if(i % 2 != 0){
                oddNumbers.push(i)          
            }
        }
        let viewFullList = await ask.prompt([
            {
                name:"List",
                type:"input",
                message:"See full list: y/n"
            }
        ])
        let responseOptionFullList = viewFullList.List
        if(responseOptionFullList === "y"){
            console.log(Colors.green("List:"),...oddNumbers)
            console.log(Colors.green("Count:"),oddNumbers.length)
        }else{  
            console.log(Colors.green("Count:"),oddNumbers.length)
        }
    }

    let valueX:any = numbersRange.x
    let valueY:any  = numbersRange.y


    oddSearch(parseInt(valueX),parseInt(valueY))
}
Main()
