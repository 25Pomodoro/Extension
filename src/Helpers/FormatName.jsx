function formatName(name) {
    name = name.trim();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return name;
}


export default formatName;