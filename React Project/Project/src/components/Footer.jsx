export default function Footer(){
    return(<>
         <footer className="bg-dark text-light py-4 mt-5 border-top">
      <div className="container-md">
        <div className="row align-items-center">
          
          {/* Left Side: Brand Name & Copyright */}
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <span className="fw-bold fs-5 me-2">Trivo World</span>
            <small className="text-secondary">&copy; 2026. All rights reserved.</small>
          </div>

          {/* Right Side: Quick Clean Links */}
          <div className="col-md-6 text-center text-md-end">
            <a href="#privacy" className="text-secondary text-decoration-none small me-3 hover-link">Privacy Policy</a>
            <a href="#terms" className="text-secondary text-decoration-none small me-3 hover-link">Terms of Service</a>
            <a href="#support" className="text-secondary text-decoration-none small">Support</a>
          </div>

        </div>
      </div>
    </footer>
    </>)
}