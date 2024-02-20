---
layout: layouts/base.njk
eleventyNavigation:
  key: About Us
  order: 3
---
# About Us

<form>
<input type="email" />
<button class="btn btn-small btn-primary" type="submit">Click</button>
</form>

We can help with all your music needs, musically.
<form>
  <label>Email:</label> <input width="200px" type="email" name="email" placeholder="name@example.com">
  <fieldset>
  <legend>Output Format</legend>
  <input type="radio" name="format" id="txt" value="txt"> <label for="txt">Text File</label>
  <input type="radio" name="format" id="csv" value="csv"> <label for="csv">CSV File</label>
    <input type="radio" name="format" id="xlsx" value="xslx"> <label for="xlsx">XLSX File</label>
    <button type="button" class="btn btn-large btn-primary">Submit</button>
</form>

<p>&nbsp;</p>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Enter Your Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">How can we help?</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class=><button type="button" class="btn btn-primary btn-sm">Send Enquiry</button></div>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
</div>
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D class="d-block w-100" alt="synthesiser">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1531651008558-ed1740375b39?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="microphone">
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1627407660893-fe01f60d44c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="Studio">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
