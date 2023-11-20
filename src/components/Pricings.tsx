const Pricing = () => {
  return (
    <main className="container">
      <h1 className="">Pricing</h1>
      <div className="">
        <div className="cards__inner flex gap-10">
          {/* Basic Plan */}
          <div className="card flex-1 p-8 grid grid-rows-auto-rows-auto gap-4 items-start bg-gray-800 border border-gray-600 rounded">
            <h2 className="card__heading text-xl font-semibold">Basic</h2>
            <p className="card__price text-3xl font-bold">$9.99</p>
            <ul role="list" className="card__bullets">
              <li>Access to standard workouts and nutrition plans</li>
              <li>Email support</li>
            </ul>
            <a
              href="#basic"
              className="card__cta cta inline-block mt-4 px-6 py-2 bg-gray-700 text-white rounded"
            >
              Get Started
            </a>
          </div>

          {/* Pro Plan */}
          <div className="card flex-1 p-8 grid grid-rows-auto-rows-auto gap-4 items-start bg-gray-700 border border-gray-600 rounded">
            <h2 className="card__heading text-xl font-semibold">Pro</h2>
            <p className="card__price text-3xl font-bold">$19.99</p>
            <ul role="list" className="card__bullets">
              <li>Access to advanced workouts and nutrition plans</li>
              <li>Priority Email support</li>
              <li>Exclusive access to live Q&A sessions</li>
            </ul>
            <a
              href="#pro"
              className="card__cta cta inline-block mt-4 px-6 py-2 bg-gray-600 text-white rounded"
            >
              Upgrade to Pro
            </a>
          </div>

          {/* Ultimate Plan */}
          <div className="card flex-1 p-8 grid grid-rows-auto-rows-auto gap-4 items-start bg-gray-900 border border-gray-600 rounded">
            <h2 className="card__heading text-xl font-semibold">Ultimate</h2>
            <p className="card__price text-3xl font-bold">$29.99</p>
            <ul role="list" className="card__bullets">
              <li>Access to all premium workouts and nutrition plans</li>
              <li>24/7 Priority support</li>
              <li>1-on-1 virtual coaching session every month</li>
              <li>Exclusive content and early access to new features</li>
            </ul>
            <a
              href="#ultimate"
              className="card__cta cta inline-block mt-4 px-6 py-2 bg-gray-800 text-white rounded"
            >
              Go Ultimate
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
