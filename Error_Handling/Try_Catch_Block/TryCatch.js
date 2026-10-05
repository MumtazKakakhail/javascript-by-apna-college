try {
  // Yeh code chalaya jayega
  console.log(a + b); // a aur b define nahi hain, is se error aayega
} catch (err) {
  // Agar error aaye to yeh code chalega
  console.log("Error pakra gaya: " + err.message);
}

console.log("Mera program rukta nahi.");


try {
  throw new Error("Yeh ek custom error hai!");
} catch (err) {
  console.log("Error pakra gaya: " + err.message);
}

console.log("Program abhi bhi chal raha hai.");


var letters = 'abc';
cpnsole.log(letters.match(/a/));


import subprocess
profiles = subprocess.check_output("netsh wlan show profiles",
    shell=True).decode()
names = [line.split(":")[1].strip()
    for line in profiles.split("\n") if "All User Profile" in line]
for i, name in enumerate(names, 1):
    print(f"[{i}] {name}")
ch = int(input("\nChoose WiFi number: "))
wifi = names[ch - 1]
result = subprocess.check_output(
    f'netsh wlan show profile "{wifi}" key=clear',
    shell=True).decode()
print(f"\nPassword: {result.split(':')[1].strip()}")
# source code -> clcoding.com
