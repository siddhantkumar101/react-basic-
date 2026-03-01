import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/usecurrencyinfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom((prev) => {
      setTo(prev);
      return to;
    });
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div
  className="w-full h-screen flex justify-center items-center bg-cover bg-center"
  style={{
    backgroundImage: `url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fmoney-converter&psig=AOvVaw0DycqKZZ4NkfjkWRwxf-kS&ust=1772452010457000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLCsj7TQ_pIDFQAAAAAdAAAAABAEhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fmoney-converter&psig=AOvVaw0DycqKZZ4NkfjkWRwxf-kS&ust=1772452010457000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLCsj7TQ_pIDFQAAAAAdAAAAABAE')`,
  }}
>

      <div className="w-full max-w-md mx-auto border rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="mb-2">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              selectedCurrency={from}
              onCurrencyChange={setFrom}
              onAmountChange={setAmount}
            />
          </div>

          <div className="relative h-4">
            <button
              type="button"
              onClick={swap}
              className="absolute left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded"
            >
              Swap
            </button>
          </div>

          <div className="mt-4 mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              selectedCurrency={to}
              onCurrencyChange={setTo}
              amountDisabled
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
