def arithmetic_arranger(problems):

  if len(problems) > 5:
    return "Error: Too many problems."
  def plusAndMinus():
    if op == "*" or "/":
      return "Error: Operator must be '+' or '-'."
