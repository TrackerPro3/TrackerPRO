
    let resetgriddisplay = I.seeElement(this.reviewPge.resetgrid)
    {
        if (resetgriddisplay) {
            I.click(this.reviewPge.resetgrid)
            I.click(this.reviewPge.resetcontbtn)
            
        } else {
            this.clickCertificate()
        }
    }
