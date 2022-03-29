def arithmetic_arranger(problems):
  lineOne = ""
  lineTwo = ""
  lineThree = ""
  lineFour = ""
  
  if len(problems) > 5:
    return "Error: Too many problems."
  
  for j, problem in enumerate(problems):
    firstNum, secondNum, operator = problem.split()
    
    if operator not in "+" or "-":
      return "Error: Operator must be '+' or '-'."
    
    if not firstNum.isdigit() or not secondNum.isdigit():
      return "Error: Numbers must only contain digits."
    
    while not len(firstNum) > 4 or len(secondNum) > 4:
        return "Error: Numbers cannot be more than four digits."
      
    while operator == "+":
      answer = int(firstNum) + int(secondNum)
      
      if operator == "-":
        answer = int(firstNum) - int(secondNum)
    
  arranged_problems = ""
  return arranged_problems
