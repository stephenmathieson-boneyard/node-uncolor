
test: node_modules
	@./node_modules/.bin/mocha \
		--require should \
		--reporter spec \
		test.js

node_modules:
	@npm install

.PHONY: test
