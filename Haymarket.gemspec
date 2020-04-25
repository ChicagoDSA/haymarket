# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "Haymarket"
  spec.authors       = ["Lucien Liz-Lepiorz"]
  spec.email         = ["lucien.lizlepiorz@gmail.com"]

  spec.summary       = "A template to easily launch Chicago DSA websites."
  spec.homepage      = "https://www.chicagodsa.org/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.0"

  spec.add_development_dependency "bundler", "~> 2.1.4"
  spec.add_development_dependency "rake", "~> 12.0"
end
