class Coll
  def initialize(coll = [])
    @arr = coll
  end

  def each
    for x in @arr do
      yield x
    end
  end
end
