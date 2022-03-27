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
    
  arranged_problems = ""
  return arranged_problems
