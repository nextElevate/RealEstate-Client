const useFetchData = async (url: string) => {
    const { data, error, refresh } = await useFetch(url);
    if (error.value) {
        console.error('Error fetching properties:', error.value)
    } 
    if(!data.value){
       await refresh()
    }   
    return data.value
}
