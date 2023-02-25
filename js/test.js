(()=> {
    let delay = 0;
    const jobs = document.querySelectorAll('.classname');
    jobs.forEach((job)=> {
        setTimeout(()=> {
            job.click()
        }, delay)
        delay += 2000
    })
})()