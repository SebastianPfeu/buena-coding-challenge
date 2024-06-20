import MultiPageForm from './components/Forms/MuliPageForm'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-10">
          <div className="text-center mb-20">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Register with <span className="text-blue-600 dark:text-blue-500">Buena</span> and start booking apartments</h1>
          </div>
          <MultiPageForm />
        </div>
      </div>
    </>
  )
}

export default App;
