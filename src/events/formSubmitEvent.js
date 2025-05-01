const FormSubmitEventComponent = () => {

    const handleSubmit = (event) => {
        event.preventDefault();//prevent the page from reloading
        console.log('Form Submitted');
    }


    return (<div>
        <form
            onSubmit={handleSubmit}
        >
            <button type="submit">Submit</button>

        </form>

    </div>)

}