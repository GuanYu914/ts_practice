var isWinter: boolean = false;
var count: number = 5
var _name: string = 'Brans' // because tsc import DOM default, so can't use name
var names: any[] = ['a', '1', 2]

enum Starks { Joan = 1, Bran, Eddard, Catlyn }
var cat: Starks = Starks.Catlyn;

function getName(): void {
  console.log('My name is emory')
}