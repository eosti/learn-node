var out = 0;
for(i=2; i < process.argv.length; i++) {
	out = +process.argv[i] + out;
}

console.log(out);
