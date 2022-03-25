num = input("please enter a number: ")

def arithmetic_arranger(problems):
  lineOne = ""
  lineTwo = ""
  lineThree = ""
  lineFour = ""

  problems = []
  
  if len(problems) > 5:
    return "Error: Too many problems."
  for i in problems:
    firstNum, secondNum, operator = problems.split() 
    
