import promptSync from "prompt-sync";

const prompt = promptSync();

const ROWS: number = 3;
const COLS: number = 3;

type SymbolKey = "A" | "B" | "C" | "D";

const SYMBOLS_COUNT: Record<SymbolKey, number> = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUES: Record<SymbolKey, number> = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const deposit = (): number => {
  while (true) {
    const depositAmount: string = prompt("Enter a deposit amount: ");
    const numberDepositAmount: number = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = (): number => {
  while (true) {
    const lines: string = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines: number = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, try again.");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance: number, lines: number): number => {
  while (true) {
    const bet: string = prompt("Enter the bet per line: ");
    const numberBet: number = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log("Invalid bet, try again.");
    } else {
      return numberBet;
    }
  }
};

const spin = (): SymbolKey[][] => {
  const symbols: SymbolKey[] = [];

  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT) as [SymbolKey, number][]) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels: SymbolKey[][] = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols: SymbolKey[] = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};

const transpose = (reels: SymbolKey[][]): SymbolKey[][] => {
  const rows: SymbolKey[][] = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }

  return rows;
};

const printRows = (rows: SymbolKey[][]): void => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i !== row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

const getWinnings = (rows: SymbolKey[][], bet: number, lines: number): number => {
  let winnings = 0;

  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols) {
      if (symbol !== symbols[0]) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      winnings += bet * SYMBOL_VALUES[symbols[0]];
    }
  }

  return winnings;
};

const game = (): void => {
  let balance = deposit();

  while (true) {
    console.log("You have a balance of $" + balance);
    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);
    balance -= bet * numberOfLines;

    const reels = spin();
    const rows = transpose(reels);

    printRows(rows);

    const winnings = getWinnings(rows, bet, numberOfLines);
    balance += winnings;
    console.log("You won, $" + winnings.toString());

    if (balance <= 0) {
      console.log("You ran out of money!");
      break;
    }

    const playAgain: string = prompt("Do you want to play again (y/n)? ");
    if (playAgain.toLowerCase() !== "y") break;
  }
};

game();
