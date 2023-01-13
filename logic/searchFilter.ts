export default function searchFilter(inputValue: string, options: any[]) {
    return options.filter((option) => {
      return option.name.toLowerCase().startsWith(inputValue);
    });
  }