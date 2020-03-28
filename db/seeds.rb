5.times do
  Review.create!(
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsa doloribus, mollitia iste vel, eum expedita aliquid, eos in assumenda animi odio voluptatum dolorem, quisquam culpa ipsum temporibus recusandae modi.",
    author: ['Pierre Hermé', 'Paul Baucuse', 'Jacques Chirac', 'Lucien Jeunesse', 'Ben Parker', 'Seb Saunier'].sample,
    company: ['Apple', 'Google', 'LVMH', 'Virbac', 'Philips'].sample
  )
end
